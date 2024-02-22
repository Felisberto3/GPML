/*
  Warnings:

  - You are about to drop the column `password_hash` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `password_hash`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
