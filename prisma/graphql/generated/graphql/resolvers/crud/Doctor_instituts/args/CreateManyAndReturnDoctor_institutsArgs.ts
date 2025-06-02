import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsCreateManyInput } from "../../../inputs/Doctor_institutsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateManyInput], {
    nullable: false
  })
  data!: Doctor_institutsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
