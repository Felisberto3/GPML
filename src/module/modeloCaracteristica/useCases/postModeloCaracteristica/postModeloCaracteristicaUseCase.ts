import { ServerError } from "../../../../error/index";
import { ModeloCaracteristicaRepository } from "../../repository/respository";
import { CreateModeloCaracteristicaDto } from "../../repository/interface";
import { UsuarioRepository } from "../../../usuario/repository/respository";
import { Usuario } from "@prisma/client";

class PostModeloCaracteristicaUseCase {
    constructor(
        private modeloCaracteristicaRepository: ModeloCaracteristicaRepository,
        private usuarioRepository: UsuarioRepository
        ) { }

    async execute({ next, ...data }: CreateModeloCaracteristicaDto) {
        
        const modelo = await this.usuarioRepository.findById(data.modeloId) as Usuario
        
        if (modelo) {
            modelo.tipo !== 'modelo'  && next(new ServerError('Apenas modelos podem ter assas caracteristicas', 400))
        }
        const modeloAlreadyExist = await this.modeloCaracteristicaRepository.findByModeloId(data.modeloId)
        
        if (modeloAlreadyExist) {
            next(new ServerError(" Caracteristicas do modelo já existe", 400))
        }

        try {

            return await this.modeloCaracteristicaRepository.create({ next, ...data });
            
        } catch (error: any) {
            // Lança um erro se ocorrer algum problema
            next(new ServerError("falha ao criar o ModeloCaracteristica, talves id do modelo não existe", 500))
            return
        }
    }
}

export { PostModeloCaracteristicaUseCase };
