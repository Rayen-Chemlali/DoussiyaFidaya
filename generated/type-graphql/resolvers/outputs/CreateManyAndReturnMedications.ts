import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Prescriptions } from "../../models/Prescriptions";

@TypeGraphQL.ObjectType("CreateManyAndReturnMedications", {})
export class CreateManyAndReturnMedications {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dosage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  duration!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  frequency!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  prescription_id!: string;

  @TypeGraphQL.Field(_type => Prescriptions, {
    nullable: false
  })
  prescriptions!: Prescriptions;
}
