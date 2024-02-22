import { Usuario } from "@prisma/client";
import { NextFunction } from "express";

interface UsuariocreateUsuarioDto {
    nomeCompleto: string
    password: string
    email: string
    tipo: 'modelo' | 'fotografo'
    genero: 'masculino' | 'feminino' 
    next: NextFunction
}
interface UsuarioRepositoryTDO {
    create({ email, nomeCompleto, password,tipo,genero, next }: UsuariocreateUsuarioDto): Promise<Usuario>
    findById(id: number): Promise<Usuario | Usuario[] | null>
    findByEmail(email: string): Promise<Usuario | null>
}

export { UsuariocreateUsuarioDto, UsuarioRepositoryTDO }