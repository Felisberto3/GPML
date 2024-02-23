/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Agencia` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `tipo` ENUM('normal', 'modelo', 'fotografo') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Agencia_nome_key` ON `Agencia`(`nome`);
