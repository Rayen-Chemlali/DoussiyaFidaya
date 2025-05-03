import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateManyInstituts_medicauxInput } from "../inputs/Doctor_institutsCreateManyInstituts_medicauxInput";

@TypeGraphQL.InputType("Doctor_institutsCreateManyInstituts_medicauxInputEnvelope", {})
export class Doctor_institutsCreateManyInstituts_medicauxInputEnvelope {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateManyInstituts_medicauxInput], {
    nullable: false
  })
  data!: Doctor_institutsCreateManyInstituts_medicauxInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
