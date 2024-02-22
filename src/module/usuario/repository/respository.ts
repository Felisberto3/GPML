import { $Enums, Usuario } from "@prisma/client";
import { UsuarioRepositoryTDO, UsuariocreateUsuarioDto } from "./interface";
import { prisma } from "../../../prismaConfig/index";

class UsuarioRepository implements UsuarioRepositoryTDO {
    constructor() { }

    async create({ email, nomeCompleto, password,tipo, genero }: UsuariocreateUsuarioDto): Promise<Usuario> {

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
}

export { UsuarioRepository }