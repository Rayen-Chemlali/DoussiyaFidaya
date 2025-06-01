import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateOrConnectWithoutInstituts_medicauxInput";
import { DoctorsCreateWithoutInstituts_medicauxInput } from "../inputs/DoctorsCreateWithoutInstituts_medicauxInput";
import { DoctorsScalarWhereInput } from "../inputs/DoctorsScalarWhereInput";
import { DoctorsUpdateManyWithWhereWithoutInstituts_medicauxInput } from "../inputs/DoctorsUpdateManyWithWhereWithoutInstituts_medicauxInput";
import { DoctorsUpdateWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/DoctorsUpdateWithWhereUniqueWithoutInstituts_medicauxInput";
import { DoctorsUpsertWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/DoctorsUpsertWithWhereUniqueWithoutInstituts_medicauxInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateManyWithoutInstituts_medicauxNestedInput", {})
export class DoctorsUpdateManyWithoutInstituts_medicauxNestedInput {
  @TypeGraphQL.Field(_type => [DoctorsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: DoctorsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpsertWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  upsert?: DoctorsUpsertWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  set?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  delete?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpdateWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  update?: DoctorsUpdateWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpdateManyWithWhereWithoutInstituts_medicauxInput], {
    nullable: true
  })
  updateMany?: DoctorsUpdateManyWithWhereWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DoctorsScalarWhereInput[] | undefined;
}
