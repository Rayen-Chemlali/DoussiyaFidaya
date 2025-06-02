import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Doctor_institutsScalarWhereInput", {})
export class Doctor_institutsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereInput], {
    nullable: true
  })
  AND?: Doctor_institutsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereInput], {
    nullable: true
  })
  OR?: Doctor_institutsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarWhereInput], {
    nullable: true
  })
  NOT?: Doctor_institutsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  doctor_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  institut_medical_id?: UuidFilter | undefined;
}
