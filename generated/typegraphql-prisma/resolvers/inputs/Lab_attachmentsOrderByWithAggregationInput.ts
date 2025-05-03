import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsCountOrderByAggregateInput } from "../inputs/Lab_attachmentsCountOrderByAggregateInput";
import { Lab_attachmentsMaxOrderByAggregateInput } from "../inputs/Lab_attachmentsMaxOrderByAggregateInput";
import { Lab_attachmentsMinOrderByAggregateInput } from "../inputs/Lab_attachmentsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Lab_attachmentsOrderByWithAggregationInput", {})
export class Lab_attachmentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lab_document_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Lab_attachmentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Lab_attachmentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Lab_attachmentsMinOrderByAggregateInput | undefined;
}
