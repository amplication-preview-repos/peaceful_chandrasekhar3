/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AiToolService } from "../aiTool.service";
import { AiToolCreateInput } from "./AiToolCreateInput";
import { AiTool } from "./AiTool";
import { AiToolFindManyArgs } from "./AiToolFindManyArgs";
import { AiToolWhereUniqueInput } from "./AiToolWhereUniqueInput";
import { AiToolUpdateInput } from "./AiToolUpdateInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";

export class AiToolControllerBase {
  constructor(protected readonly service: AiToolService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AiTool })
  async createAiTool(@common.Body() data: AiToolCreateInput): Promise<AiTool> {
    return await this.service.createAiTool({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        category: true,
        url: true,
        price: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AiTool] })
  @ApiNestedQuery(AiToolFindManyArgs)
  async aiTools(@common.Req() request: Request): Promise<AiTool[]> {
    const args = plainToClass(AiToolFindManyArgs, request.query);
    return this.service.aiTools({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        category: true,
        url: true,
        price: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AiTool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async aiTool(
    @common.Param() params: AiToolWhereUniqueInput
  ): Promise<AiTool | null> {
    const result = await this.service.aiTool({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        category: true,
        url: true,
        price: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AiTool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAiTool(
    @common.Param() params: AiToolWhereUniqueInput,
    @common.Body() data: AiToolUpdateInput
  ): Promise<AiTool | null> {
    try {
      return await this.service.updateAiTool({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          category: true,
          url: true,
          price: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AiTool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAiTool(
    @common.Param() params: AiToolWhereUniqueInput
  ): Promise<AiTool | null> {
    try {
      return await this.service.deleteAiTool({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          category: true,
          url: true,
          price: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: AiToolWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        rating: true,

        aiTool: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  async connectReviews(
    @common.Param() params: AiToolWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateAiTool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  async updateReviews(
    @common.Param() params: AiToolWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateAiTool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  async disconnectReviews(
    @common.Param() params: AiToolWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateAiTool({
      where: params,
      data,
      select: { id: true },
    });
  }
}