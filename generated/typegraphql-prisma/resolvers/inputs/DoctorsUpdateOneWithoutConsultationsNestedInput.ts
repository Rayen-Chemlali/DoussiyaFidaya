import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutConsultationsInput } from "../inputs/DoctorsCreateOrConnectWithoutConsultationsInput";
import { DoctorsCreateWithoutConsultationsInput } from "../inputs/DoctorsCreateWithoutConsultationsInput";
import { DoctorsUpdateToOneWithWhereWithoutConsultationsInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutConsultationsInput";
import { DoctorsUpsertWithoutConsultationsInput } from "../inputs/DoctorsUpsertWithoutConsultationsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutConsultationsNestedInput", {})
export class DoctorsUpdateOneWithoutConsultationsNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutConsultationsInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  disconnect?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  delete?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutConsultationsInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutConsultationsInput | undefined;
}
