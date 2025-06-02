import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutDoctorsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutDoctorsInput";
import { Instituts_medicauxCreateWithoutDoctorsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctorsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxCreateNestedManyWithoutDoctorsInput", {})
export class Instituts_medicauxCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [Instituts_medicauxCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereUniqueInput], {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput[] | undefined;
}
