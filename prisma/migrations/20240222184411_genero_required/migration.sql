/*
  Warnings:

  - Made the column `genero` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `genero` ENUM('masculino', 'feminino') NOT NULL,
    MODIFY `tipo` ENUM('modelo', 'fotografo') NOT NULL;
