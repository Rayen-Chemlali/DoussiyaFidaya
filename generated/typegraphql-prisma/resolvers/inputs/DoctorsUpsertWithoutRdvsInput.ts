import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutRdvsInput } from "../inputs/DoctorsCreateWithoutRdvsInput";
import { DoctorsUpdateWithoutRdvsInput } from "../inputs/DoctorsUpdateWithoutRdvsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutRdvsInput", {})
export class DoctorsUpsertWithoutRdvsInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutRdvsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutRdvsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdvsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutRdvsInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
