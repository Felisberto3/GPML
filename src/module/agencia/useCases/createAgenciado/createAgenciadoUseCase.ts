import { UsuarioRepository } from '../../../usuario/repository/respository'

class CreateAgenciadoUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute(agenciadoId: number, agenciaId: number) {
        await this.usuarioRepository.update(agenciadoId, agenciaId)
    }
}

export { CreateAgenciadoUseCase }