import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsOrderByWithRelationInput } from "../../../inputs/Doctor_institutsOrderByWithRelationInput";
import { Doctor_institutsWhereInput } from "../../../inputs/Doctor_institutsWhereInput";
import { Doctor_institutsWhereUniqueInput } from "../../../inputs/Doctor_institutsWhereUniqueInput";
import { Doctor_institutsScalarFieldEnum } from "../../../../enums/Doctor_institutsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  where?: Doctor_institutsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Doctor_institutsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Doctor_institutsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"doctor_id" | "institut_medical_id"> | undefined;
}
