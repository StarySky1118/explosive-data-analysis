<script setup lang="ts">
import { ref, defineExpose, reactive } from "vue";

const visible = ref<boolean>(false);

const open = () => {
  visible.value = true;
};

const form = reactive({
  dataSourceName: "",
  identifier: "",
  associatedFile: ""
});

// 提交
const onSubmit = () => {
  console.log(form);
};

// 关闭
const onClose = () => {
  visible.value = false;
};

defineExpose({
  open
});
</script>

<template>
  <el-drawer v-model="visible" title="新增数据源">
    <el-form
      ref="addForm"
      :model="form"
      label-width="auto"
      style="max-width: 600px"
    >
      <el-form-item label="数据源名称">
        <el-input v-model="form.dataSourceName" />
      </el-form-item>
      <el-form-item label="英文标识">
        <el-input v-model="form.identifier" />
      </el-form-item>
      <el-form-item label="关联的数据文件">
        <el-input v-model="form.associatedFile" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button @click="onClose">取消</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
