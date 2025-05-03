import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsOrderByWithRelationInput } from "../../../inputs/MedicationsOrderByWithRelationInput";
import { MedicationsWhereInput } from "../../../inputs/MedicationsWhereInput";
import { MedicationsWhereUniqueInput } from "../../../inputs/MedicationsWhereUniqueInput";
import { MedicationsScalarFieldEnum } from "../../../../enums/MedicationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMedicationsOrThrowArgs {
  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  where?: MedicationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MedicationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MedicationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MedicationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MedicationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "dosage" | "duration" | "frequency" | "name" | "quantity" | "prescription_id"> | undefined;
}
