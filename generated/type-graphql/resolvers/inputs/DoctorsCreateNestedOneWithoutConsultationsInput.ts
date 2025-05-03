import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutConsultationsInput } from "../inputs/DoctorsCreateOrConnectWithoutConsultationsInput";
import { DoctorsCreateWithoutConsultationsInput } from "../inputs/DoctorsCreateWithoutConsultationsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutConsultationsInput", {})
export class DoctorsCreateNestedOneWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
