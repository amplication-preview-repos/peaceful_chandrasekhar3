/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiToolWhereUniqueInput } from "./AiToolWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AiToolUpdateInput } from "./AiToolUpdateInput";

@ArgsType()
class UpdateAiToolArgs {
  @ApiProperty({
    required: true,
    type: () => AiToolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiToolWhereUniqueInput)
  @Field(() => AiToolWhereUniqueInput, { nullable: false })
  where!: AiToolWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AiToolUpdateInput,
  })
  @ValidateNested()
  @Type(() => AiToolUpdateInput)
  @Field(() => AiToolUpdateInput, { nullable: false })
  data!: AiToolUpdateInput;
}

export { UpdateAiToolArgs as UpdateAiToolArgs };