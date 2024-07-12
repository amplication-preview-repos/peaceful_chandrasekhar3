import { AiTool as TAiTool } from "../api/aiTool/AiTool";

export const AITOOL_TITLE_FIELD = "name";

export const AiToolTitle = (record: TAiTool): string => {
  return record.name?.toString() || String(record.id);
};
