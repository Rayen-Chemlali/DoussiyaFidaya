import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsOrderByWithRelationInput } from "../../../inputs/GeneralMedicalRecordsOrderByWithRelationInput";
import { GeneralMedicalRecordsWhereInput } from "../../../inputs/GeneralMedicalRecordsWhereInput";
import { GeneralMedicalRecordsWhereUniqueInput } from "../../../inputs/GeneralMedicalRecordsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GeneralMedicalRecordsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereUniqueInput, {
    nullable: true
  })
  cursor?: GeneralMedicalRecordsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
