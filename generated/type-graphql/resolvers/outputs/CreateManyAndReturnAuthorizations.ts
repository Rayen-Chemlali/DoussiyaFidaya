import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnAuthorizationsInstituts_medicauxArgs } from "./args/CreateManyAndReturnAuthorizationsInstituts_medicauxArgs";
import { Instituts_medicaux } from "../../models/Instituts_medicaux";
import { Patients } from "../../models/Patients";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnAuthorizations", {})
export class CreateManyAndReturnAuthorizations {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: false
  })
  level!: "general" | "speciality" | "full_access";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  institut_medical_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => Patients, {
    nullable: false
  })
  patients!: Patients;

  instituts_medicaux!: Instituts_medicaux | null;

  @TypeGraphQL.Field(_type => Instituts_medicaux, {
    name: "instituts_medicaux",
    nullable: true
  })
  getInstituts_medicaux(@TypeGraphQL.Root() root: CreateManyAndReturnAuthorizations, @TypeGraphQL.Args() args: CreateManyAndReturnAuthorizationsInstituts_medicauxArgs): Instituts_medicaux | null {
    return root.instituts_medicaux;
  }
}
