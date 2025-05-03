import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateOrConnectWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutConsultation_lab_requestsInput";
import { Lab_requestsCreateWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsCreateWithoutConsultation_lab_requestsInput";
import { Lab_requestsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput";
import { Lab_requestsUpsertWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsUpsertWithoutConsultation_lab_requestsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput", {})
export class Lab_requestsUpdateOneRequiredWithoutConsultation_lab_requestsNestedInput {
  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateOrConnectWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpsertWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  upsert?: Lab_requestsUpsertWithoutConsultation_lab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput, {
    nullable: true
  })
  update?: Lab_requestsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput | undefined;
}
