/*
  Warnings:

  - You are about to drop the `consultation_lab_requests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor_instituts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "consultation_lab_requests" DROP CONSTRAINT "FK_c7ff515e4184d1f7f535e8b3caa";

-- DropForeignKey
ALTER TABLE "consultation_lab_requests" DROP CONSTRAINT "FK_dee1a36c581e90ee3237a3b5eda";

-- DropForeignKey
ALTER TABLE "doctor_instituts" DROP CONSTRAINT "FK_923f87cb0e2090945db970c7b6e";

-- DropForeignKey
ALTER TABLE "doctor_instituts" DROP CONSTRAINT "FK_b0a5ec63efd9946c346c74e5768";

-- DropTable
DROP TABLE "consultation_lab_requests";

-- DropTable
DROP TABLE "doctor_instituts";

-- CreateTable
CREATE TABLE "_consultationsTolab_requests" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_doctorsToinstituts_medicaux" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_consultationsTolab_requests_AB_unique" ON "_consultationsTolab_requests"("A", "B");

-- CreateIndex
CREATE INDEX "_consultationsTolab_requests_B_index" ON "_consultationsTolab_requests"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_doctorsToinstituts_medicaux_AB_unique" ON "_doctorsToinstituts_medicaux"("A", "B");

-- CreateIndex
CREATE INDEX "_doctorsToinstituts_medicaux_B_index" ON "_doctorsToinstituts_medicaux"("B");

-- AddForeignKey
ALTER TABLE "_consultationsTolab_requests" ADD CONSTRAINT "_consultationsTolab_requests_A_fkey" FOREIGN KEY ("A") REFERENCES "consultations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_consultationsTolab_requests" ADD CONSTRAINT "_consultationsTolab_requests_B_fkey" FOREIGN KEY ("B") REFERENCES "lab_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorsToinstituts_medicaux" ADD CONSTRAINT "_doctorsToinstituts_medicaux_A_fkey" FOREIGN KEY ("A") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorsToinstituts_medicaux" ADD CONSTRAINT "_doctorsToinstituts_medicaux_B_fkey" FOREIGN KEY ("B") REFERENCES "instituts_medicaux"("id") ON DELETE CASCADE ON UPDATE CASCADE;
