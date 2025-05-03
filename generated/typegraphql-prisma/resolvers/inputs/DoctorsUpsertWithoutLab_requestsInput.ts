import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutLab_requestsInput } from "../inputs/DoctorsCreateWithoutLab_requestsInput";
import { DoctorsUpdateWithoutLab_requestsInput } from "../inputs/DoctorsUpdateWithoutLab_requestsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutLab_requestsInput", {})
export class DoctorsUpsertWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
