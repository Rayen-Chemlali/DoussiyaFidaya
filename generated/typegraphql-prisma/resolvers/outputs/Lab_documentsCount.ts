import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCountAnalysis_resultsArgs } from "./args/Lab_documentsCountAnalysis_resultsArgs";
import { Lab_documentsCountCtscan_resultsArgs } from "./args/Lab_documentsCountCtscan_resultsArgs";
import { Lab_documentsCountLab_attachmentsArgs } from "./args/Lab_documentsCountLab_attachmentsArgs";
import { Lab_documentsCountLab_resultsArgs } from "./args/Lab_documentsCountLab_resultsArgs";
import { Lab_documentsCountXray_resultsArgs } from "./args/Lab_documentsCountXray_resultsArgs";

@TypeGraphQL.ObjectType("Lab_documentsCount", {})
export class Lab_documentsCount {
  analysis_results!: number;
  ctscan_results!: number;
  lab_attachments!: number;
  lab_results!: number;
  xray_results!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "analysis_results",
    nullable: false
  })
  getAnalysis_results(@TypeGraphQL.Root() root: Lab_documentsCount, @TypeGraphQL.Args() args: Lab_documentsCountAnalysis_resultsArgs): number {
    return root.analysis_results;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ctscan_results",
    nullable: false
  })
  getCtscan_results(@TypeGraphQL.Root() root: Lab_documentsCount, @TypeGraphQL.Args() args: Lab_documentsCountCtscan_resultsArgs): number {
    return root.ctscan_results;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_attachments",
    nullable: false
  })
  getLab_attachments(@TypeGraphQL.Root() root: Lab_documentsCount, @TypeGraphQL.Args() args: Lab_documentsCountLab_attachmentsArgs): number {
    return root.lab_attachments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lab_results",
    nullable: false
  })
  getLab_results(@TypeGraphQL.Root() root: Lab_documentsCount, @TypeGraphQL.Args() args: Lab_documentsCountLab_resultsArgs): number {
    return root.lab_results;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "xray_results",
    nullable: false
  })
  getXray_results(@TypeGraphQL.Root() root: Lab_documentsCount, @TypeGraphQL.Args() args: Lab_documentsCountXray_resultsArgs): number {
    return root.xray_results;
  }
}
