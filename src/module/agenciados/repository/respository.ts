import { $Enums, Usuario } from "@prisma/client";
import { UsuarioRepositoryTDO, UsuarioUpdateUsuarioDto, UsuariocreateUsuarioDto } from "./interface";
import { prisma } from "../../../prismaConfig/index";

class UsuarioRepository implements UsuarioRepositoryTDO {
    constructor() { }

    async create({ email, nomeCompleto, password,tipo, genero, next }: UsuariocreateUsuarioDto): Promise<Usuario> {

        const usuario = await prisma.usuario.create({
            data: { nomeCompleto, email, password,tipo, genero }
        })

        return usuario
    }
    
    async findById(id: number | null): Promise<Usuario | Usuario[] |null> {

        if (!id) {
            return await prisma.usuario.findMany()
        }
        return await prisma.usuario.findFirst({ where: { id } })
    }

     async findByEmail(email: string): Promise<Usuario | null> {
        return await prisma.usuario.findUnique({ where: { email }})
    }

    async update({ id,next, ...data}: UsuarioUpdateUsuarioDto): Promise<boolean> {
        
        await prisma.usuario.update({
            where: { id },
            data:  data 
        })
        return true
    }
}

export { UsuarioRepository }