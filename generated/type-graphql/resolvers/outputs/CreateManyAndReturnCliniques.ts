import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { cliniques_type_enum } from "../../enums/cliniques_type_enum";

@TypeGraphQL.ObjectType("CreateManyAndReturnCliniques", {})
export class CreateManyAndReturnCliniques {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => cliniques_type_enum, {
    nullable: false
  })
  type!: "doctor" | "clinique" | "hopital";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;
}
