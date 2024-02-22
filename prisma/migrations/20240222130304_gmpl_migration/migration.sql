-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NULL,
    `genero` ENUM('masculino', 'feminino') NULL,
    `tipo` ENUM('modelo', 'fotografo') NULL,
    `imagem` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModeloCaracteristica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `apelido` VARCHAR(191) NOT NULL,
    `altura` DECIMAL(65, 30) NOT NULL,
    `cintura` DECIMAL(65, 30) NOT NULL,
    `sapato` INTEGER NOT NULL,
    `modeloId` INTEGER NULL,

    UNIQUE INDEX `ModeloCaracteristica_modeloId_key`(`modeloId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agenciados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NULL,
    `agencia_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `slogam` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `sobre` VARCHAR(191) NOT NULL,
    `administradorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notificacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agencia_id` INTEGER NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `destinatarioId` INTEGER NULL,
    `remitenteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ModeloCaracteristica` ADD CONSTRAINT `ModeloCaracteristica_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agenciados` ADD CONSTRAINT `Agenciados_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agenciados` ADD CONSTRAINT `Agenciados_agencia_id_fkey` FOREIGN KEY (`agencia_id`) REFERENCES `Agencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agencia` ADD CONSTRAINT `Agencia_administradorId_fkey` FOREIGN KEY (`administradorId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacao` ADD CONSTRAINT `Notificacao_agencia_id_fkey` FOREIGN KEY (`agencia_id`) REFERENCES `Agencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
