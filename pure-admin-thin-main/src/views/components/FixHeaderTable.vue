<script setup lang="ts">
import { dataManage } from "./data";

withDefaults(
  defineProps<{
    height?: string;
  }>(),
  {
    height: null
  }
);

const columns: TableColumnList = [
  {
    label: "数据源名称",
    prop: "dataSourceName",
    width: "260",
    fixed: true
  },
  {
    label: "英文标识",
    prop: "identifier",
    width: "260"
  },
  {
    label: "关联的数据文件",
    prop: "associatedFile",
    width: "260"
  },
  {
    label: "操作",
    width: "260",
    fixed: "right",
    slot: "operation"
  }
];

function handleClick(row) {
  console.log(
    "%crow===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    row
  );
}
</script>

<template>
  <pure-table
    :data="
      height ? dataManage.concat(dataManage).concat(dataManage) : dataManage
    "
    :columns="columns"
    :height="height"
  >
    <template #operation="{ row }">
      <el-button link type="success" size="large" @click="handleClick(row)">
        详细
      </el-button>
      <el-button link type="primary" size="large">编辑</el-button>
      <el-button link type="danger" size="large">删除</el-button>
    </template>
  </pure-table>
</template>
