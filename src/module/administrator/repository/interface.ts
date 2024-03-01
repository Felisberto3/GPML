import { Administrator } from "@prisma/client";

interface createAdministratorDto {
    adminId: number | null;
    agenciaId: number | null;
}

interface AdministratorRepositoryTDO {
    create({ adminId, agenciaId }: createAdministratorDto): Promise<Administrator>
    findById(id: number): Promise<Administrator | Administrator[] | null>
    // findByEmail(email: string): Promise<Administrator | null>
    // update(data: AdministratorUpdateAdministratorDto): Promise<boolean>
}

export { createAdministratorDto, AdministratorRepositoryTDO }