import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutRdvsInput } from "../inputs/DoctorsUpdateWithoutRdvsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutRdvsInput", {})
export class DoctorsUpdateToOneWithWhereWithoutRdvsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutRdvsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutRdvsInput;
}
