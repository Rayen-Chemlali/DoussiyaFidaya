import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateOrConnectWithoutInstituts_medicauxInput";
import { DoctorsCreateWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateWithoutInstituts_medicauxInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedManyWithoutInstituts_medicauxInput", {})
export class DoctorsCreateNestedManyWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => [DoctorsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: DoctorsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput[] | undefined;
}
