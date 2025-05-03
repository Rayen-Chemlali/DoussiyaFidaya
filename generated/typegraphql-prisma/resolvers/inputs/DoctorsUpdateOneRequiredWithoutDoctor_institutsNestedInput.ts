import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutDoctor_institutsInput } from "../inputs/DoctorsCreateOrConnectWithoutDoctor_institutsInput";
import { DoctorsCreateWithoutDoctor_institutsInput } from "../inputs/DoctorsCreateWithoutDoctor_institutsInput";
import { DoctorsUpdateToOneWithWhereWithoutDoctor_institutsInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutDoctor_institutsInput";
import { DoctorsUpsertWithoutDoctor_institutsInput } from "../inputs/DoctorsUpsertWithoutDoctor_institutsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput", {})
export class DoctorsUpdateOneRequiredWithoutDoctor_institutsNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutDoctor_institutsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutDoctor_institutsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutDoctor_institutsInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutDoctor_institutsInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutDoctor_institutsInput | undefined;
}
