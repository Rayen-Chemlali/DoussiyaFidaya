-- CreateEnum
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE "analysis_results_result_type_enum" AS ENUM ('analysis', 'xray', 'ctscan');

-- CreateEnum
CREATE TYPE "authorizations_level_enum" AS ENUM ('general', 'speciality', 'full_access');

-- CreateEnum
CREATE TYPE "cliniques_type_enum" AS ENUM ('doctor', 'clinique', 'hopital');

-- CreateEnum
CREATE TYPE "ctscan_results_result_type_enum" AS ENUM ('analysis', 'xray', 'ctscan');

-- CreateEnum
CREATE TYPE "doctors_specialty_enum" AS ENUM ('generaliste', 'cardiologue', 'dermatologue', 'gynecologue', 'pediatre', 'orthopediste', 'psychiatre', 'ophtalmologue', 'otorhinolaryngologue', 'neurologue', 'urologue', 'endocrinologue', 'gastroenterologue', 'rheumatologue', 'anesthesiste', 'radiologue', 'oncologue', 'chirurgien', 'nutritionniste', 'physiotherapeute', 'psychologue', 'sexologue', 'geriatre', 'allergologue', 'hematologue', 'nephrologue', 'pneumologue', 'dentiste', 'orthodontiste', 'autre');

-- CreateEnum
CREATE TYPE "doctors_type_enum" AS ENUM ('doctor', 'clinique', 'hopital');

-- CreateEnum
CREATE TYPE "hopitaux_type_enum" AS ENUM ('doctor', 'clinique', 'hopital');

-- CreateEnum
CREATE TYPE "instituts_medicaux_type_enum" AS ENUM ('doctor', 'clinique', 'hopital');

-- CreateEnum
CREATE TYPE "lab_documents_status_enum" AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "lab_requests_priority_enum" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "lab_results_result_type_enum" AS ENUM ('analysis', 'xray', 'ctscan');

-- CreateEnum
CREATE TYPE "patients_gender_enum" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "prescriptions_status_enum" AS ENUM ('Pending', 'Approved', 'Rejected');

-- CreateEnum
CREATE TYPE "users_role_enum" AS ENUM ('Patient', 'Doctor', 'Pharmacy', 'Laboratory', 'Insurance', 'Assistant', 'Admin');

-- CreateEnum
CREATE TYPE "xray_results_result_type_enum" AS ENUM ('analysis', 'xray', 'ctscan');

-- CreateTable
CREATE TABLE "GeneralMedicalRecords" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "allergies" TEXT[],
    "bloodType" VARCHAR,
    "birthDate" DATE,
    "height" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "patient_id" UUID NOT NULL,

    CONSTRAINT "PK_0c72dc98f0fdc6563edabd82a11" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysis_results" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "is_abnormal" BOOLEAN NOT NULL,
    "description" TEXT,
    "title" TEXT NOT NULL,
    "result_type" "analysis_results_result_type_enum" NOT NULL,
    "reference_range" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "lab_document_id" UUID NOT NULL,

    CONSTRAINT "PK_56560e3511c57e1db64a3ad93eb" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authorizations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "level" "authorizations_level_enum" NOT NULL,
    "institut_medical_id" UUID,
    "patient_id" UUID NOT NULL,

    CONSTRAINT "PK_03e79e63bef1d024d38b8556b8c" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificates" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" TEXT NOT NULL,
    "start_date" TIMESTAMPTZ(6),
    "end_date" TIMESTAMPTZ(6),
    "description" TEXT,
    "doctor_id" UUID,
    "patient_id" UUID NOT NULL,

    CONSTRAINT "PK_e4c7e31e2144300bea7d89eb165" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliniques" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" "cliniques_type_enum" NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "PK_1fd8166b85453bbd58c57a73736" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultation_lab_requests" (
    "consultation_id" UUID NOT NULL,
    "lab_request_id" UUID NOT NULL,

    CONSTRAINT "PK_fd46884e9600ab52922ed44848f" PRIMARY KEY ("consultation_id","lab_request_id")
);

-- CreateTable
CREATE TABLE "consultations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "section" TEXT,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "notes" TEXT[],
    "measures" JSONB,
    "doctor_id" UUID,
    "institut_medical_id" UUID,
    "prescription_id" UUID,
    "patient_id" UUID NOT NULL,

    CONSTRAINT "PK_c5b78e9424d9bc68464f6a12103" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ctscan_results" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "is_abnormal" BOOLEAN NOT NULL,
    "description" TEXT,
    "title" TEXT NOT NULL,
    "result_type" "ctscan_results_result_type_enum" NOT NULL,
    "lab_document_id" UUID NOT NULL,

    CONSTRAINT "PK_e94fdce58c4f310055979604f2b" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_instituts" (
    "doctor_id" UUID NOT NULL,
    "institut_medical_id" UUID NOT NULL,

    CONSTRAINT "PK_2d7427057147c74b40bcaa512dd" PRIMARY KEY ("doctor_id","institut_medical_id")
);

-- CreateTable
CREATE TABLE "doctors" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" "doctors_type_enum" NOT NULL,
    "is_license_verified" BOOLEAN NOT NULL DEFAULT false,
    "bio" TEXT,
    "education" TEXT[],
    "experience" TEXT[],
    "first_name" TEXT NOT NULL,
    "languages" TEXT[],
    "last_name" TEXT NOT NULL,
    "profile_image" TEXT,
    "specialty" "doctors_specialty_enum" NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hopitaux" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" "hopitaux_type_enum" NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "PK_e01bb1c91929f72e3e86bc22eed" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instituts_medicaux" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" "instituts_medicaux_type_enum" NOT NULL,

    CONSTRAINT "PK_6e99d87df61d5e11b59037799ad" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab_attachments" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "lab_document_id" UUID NOT NULL,

    CONSTRAINT "PK_9ca0438ce83469143d955f3f847" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab_documents" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "completed_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "requested_at" TIMESTAMPTZ(6) NOT NULL,
    "status" "lab_documents_status_enum" NOT NULL,
    "section" TEXT,
    "patient_id" UUID NOT NULL,
    "laboratory_id" UUID,
    "lab_request_id" UUID,

    CONSTRAINT "PK_c171023e527cd69c804651a5f0c" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab_requests" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" TEXT NOT NULL,
    "priority" "lab_requests_priority_enum",
    "description" TEXT,
    "doctor_id" UUID,
    "patient_id" UUID NOT NULL,

    CONSTRAINT "PK_5210e52d2ed16e4edc5ef1b68ab" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab_results" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "is_abnormal" BOOLEAN NOT NULL,
    "description" TEXT,
    "title" TEXT NOT NULL,
    "result_type" "lab_results_result_type_enum" NOT NULL,
    "lab_document_id" UUID NOT NULL,

    CONSTRAINT "PK_4f1c5b3b5813c98fb531e5db738" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratories" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "PK_095d956b8c0841845525483188c" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medications" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "dosage" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "prescription_id" UUID NOT NULL,

    CONSTRAINT "PK_cdee49fe7cd79db13340150d356" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "cin" INTEGER,
    "date_of_birth" TIMESTAMPTZ(6) NOT NULL,
    "gender" "patients_gender_enum" NOT NULL,
    "profile_image" TEXT,
    "general_medical_record_id" UUID,
    "user_id" UUID,

    CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pharmacies" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "PK_887410330080d3beb73850ebc8f" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prescriptions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" TIMESTAMPTZ(6) NOT NULL,
    "instructions" TEXT,
    "is_signed" BOOLEAN NOT NULL,
    "section" TEXT,
    "status" "prescriptions_status_enum" NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doctor_id" UUID,
    "patient_id" UUID NOT NULL,

    CONSTRAINT "PK_097b2cc2f2b7e56825468188503" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rdv-requests" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" TIMESTAMPTZ(6) NOT NULL,
    "time" TIME(6) NOT NULL,
    "Motif" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "patient_id" UUID NOT NULL,
    "doctor_id" UUID,
    "rdv_id" UUID,

    CONSTRAINT "PK_9d054d5913dd0a81049ec372d61" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rdvs" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" TIMESTAMPTZ(6) NOT NULL,
    "time" TIME(6) NOT NULL,
    "patient_id" UUID NOT NULL,
    "doctor_id" UUID,
    "consultation_id" UUID,
    "rdv_request_id" UUID,

    CONSTRAINT "PK_c28558f0450a7fa06f9f0d601da" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "address" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "last_login" TIMESTAMPTZ(6),
    "phone" TEXT,
    "profile_picture" TEXT,
    "role" "users_role_enum" NOT NULL,
    "associated_id" UUID,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "xray_results" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "is_abnormal" BOOLEAN NOT NULL,
    "description" TEXT,
    "title" TEXT NOT NULL,
    "result_type" "xray_results_result_type_enum" NOT NULL,
    "lab_document_id" UUID NOT NULL,

    CONSTRAINT "PK_09c381c601c108a04a9d68830ff" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionHistory" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "entity" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isSensitive" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "ActionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotification" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userId" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotificationPreference" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userId" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UserNotificationPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "senderId" UUID NOT NULL,
    "receiverId" UUID NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "patientId" UUID,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageAttachment" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "messageId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userId" UUID NOT NULL,
    "token" TEXT NOT NULL,
    "numberofTries" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "REL_fc0aa986eb176d1d55f5cfb0c3" ON "GeneralMedicalRecords"("patient_id");

-- CreateIndex
CREATE INDEX "IDX_c7ff515e4184d1f7f535e8b3ca" ON "consultation_lab_requests"("lab_request_id");

-- CreateIndex
CREATE INDEX "IDX_dee1a36c581e90ee3237a3b5ed" ON "consultation_lab_requests"("consultation_id");

-- CreateIndex
CREATE UNIQUE INDEX "REL_488cc5c61fa845f715c76450a1" ON "consultations"("prescription_id");

-- CreateIndex
CREATE INDEX "IDX_923f87cb0e2090945db970c7b6" ON "doctor_instituts"("doctor_id");

-- CreateIndex
CREATE INDEX "IDX_b0a5ec63efd9946c346c74e576" ON "doctor_instituts"("institut_medical_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_user_id_key" ON "doctors"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_a0d78441c0c6cf0f1753a1fb139" ON "patients"("cin");

-- CreateIndex
CREATE UNIQUE INDEX "REL_92850f3e2173ea4c3f2ef90f82" ON "patients"("general_medical_record_id");

-- CreateIndex
CREATE UNIQUE INDEX "REL_7fe1518dc780fd777669b5cb7a" ON "patients"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "REL_0a9fb03e689d36a4163019e5c9" ON "rdv-requests"("rdv_id");

-- CreateIndex
CREATE UNIQUE INDEX "REL_5619912f44fbef1dac6d0b3e6c" ON "rdvs"("consultation_id");

-- CreateIndex
CREATE UNIQUE INDEX "REL_8732bfa92e090503707e6b0a1c" ON "rdvs"("rdv_request_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "ActionHistory_userId_eventName_timestamp_idx" ON "ActionHistory"("userId", "eventName", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_userId_key" ON "verification_tokens"("userId");

-- AddForeignKey
ALTER TABLE "GeneralMedicalRecords" ADD CONSTRAINT "FK_fc0aa986eb176d1d55f5cfb0c3e" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "analysis_results" ADD CONSTRAINT "FK_751aa670dc6bc8f76879257eef2" FOREIGN KEY ("lab_document_id") REFERENCES "lab_documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "authorizations" ADD CONSTRAINT "FK_c59f4fa471f9e3df2212dc5f97e" FOREIGN KEY ("institut_medical_id") REFERENCES "instituts_medicaux"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "authorizations" ADD CONSTRAINT "FK_f60a74399aab50d46845e626583" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "FK_915549e4fcec56325e24074a5cc" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "FK_96a9cc6b35bb7aa3f56172571e2" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consultation_lab_requests" ADD CONSTRAINT "FK_c7ff515e4184d1f7f535e8b3caa" FOREIGN KEY ("lab_request_id") REFERENCES "lab_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation_lab_requests" ADD CONSTRAINT "FK_dee1a36c581e90ee3237a3b5eda" FOREIGN KEY ("consultation_id") REFERENCES "consultations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "FK_488cc5c61fa845f715c76450a17" FOREIGN KEY ("prescription_id") REFERENCES "prescriptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "FK_6bc76193c5d2560bdc53cd919e7" FOREIGN KEY ("institut_medical_id") REFERENCES "instituts_medicaux"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "FK_ee6c335246d3b937f11c329c837" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "FK_f8fd24eb3ea75583c650cc3c0c8" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ctscan_results" ADD CONSTRAINT "FK_cf0b41100cc512aaa487b4d8099" FOREIGN KEY ("lab_document_id") REFERENCES "lab_documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "doctor_instituts" ADD CONSTRAINT "FK_923f87cb0e2090945db970c7b6e" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_instituts" ADD CONSTRAINT "FK_b0a5ec63efd9946c346c74e5768" FOREIGN KEY ("institut_medical_id") REFERENCES "instituts_medicaux"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_attachments" ADD CONSTRAINT "FK_3008b666afffce313e48b749730" FOREIGN KEY ("lab_document_id") REFERENCES "lab_documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_documents" ADD CONSTRAINT "FK_6b0924ddd3edf174e37aaa3701d" FOREIGN KEY ("laboratory_id") REFERENCES "laboratories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_documents" ADD CONSTRAINT "FK_a12be1e329d31e57771d3ea4f71" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_documents" ADD CONSTRAINT "FK_a45399a4c22fcadfc4a41c71ed4" FOREIGN KEY ("lab_request_id") REFERENCES "lab_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_requests" ADD CONSTRAINT "FK_9d74157a7327c3ee105975b6575" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_requests" ADD CONSTRAINT "FK_ca8b7bab5fe23747323f8f70b2f" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lab_results" ADD CONSTRAINT "FK_7961e72fa3f5d49f2cefd93c00f" FOREIGN KEY ("lab_document_id") REFERENCES "lab_documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "FK_ef551ea9f33bc2b04609b034287" FOREIGN KEY ("prescription_id") REFERENCES "prescriptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "FK_7fe1518dc780fd777669b5cb7a0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "FK_92850f3e2173ea4c3f2ef90f829" FOREIGN KEY ("general_medical_record_id") REFERENCES "GeneralMedicalRecords"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "prescriptions" ADD CONSTRAINT "FK_2d6a1941bd705056030c2b9e07d" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "prescriptions" ADD CONSTRAINT "FK_9389db557647131856661f7d7b5" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdv-requests" ADD CONSTRAINT "FK_0a9fb03e689d36a4163019e5c90" FOREIGN KEY ("rdv_id") REFERENCES "rdvs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdv-requests" ADD CONSTRAINT "FK_0d2c8945b70565d0fc7fc53f501" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdv-requests" ADD CONSTRAINT "FK_ad6feaadb577025021a92dd7b61" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdvs" ADD CONSTRAINT "FK_5619912f44fbef1dac6d0b3e6c4" FOREIGN KEY ("consultation_id") REFERENCES "consultations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdvs" ADD CONSTRAINT "FK_61d99cbdd95a688a4339d68fd30" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdvs" ADD CONSTRAINT "FK_8732bfa92e090503707e6b0a1c4" FOREIGN KEY ("rdv_request_id") REFERENCES "rdv-requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rdvs" ADD CONSTRAINT "FK_8d166336614515b411c9e26ebc4" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "xray_results" ADD CONSTRAINT "FK_e63a8ea15fa5242f9c9c31c9ca4" FOREIGN KEY ("lab_document_id") REFERENCES "lab_documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MessageAttachment" ADD CONSTRAINT "MessageAttachment_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
