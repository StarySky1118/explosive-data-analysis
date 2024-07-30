<script setup lang="ts">
import FixHeaderTable from "@/views/components/FixHeaderTable.vue";
import AddDrawer from "./components/AddDrawer.vue";
import { ref } from "vue";

defineOptions({
  name: "dataManage"
});

// 新增数据源
const add = ref<InstanceType<typeof AddDrawer> | null>(null);

const handleAdd = () => {
  add.value.open();
};
</script>

<template>
  <div>
    <el-card shadow="never" class="mb-2">
      <template #header>
        <div class="card-header">
          <el-button plain type="primary" @click="handleAdd"> 新增 </el-button>
        </div>
      </template>
      <FixHeaderTable />
      <AddDrawer ref="add" />
    </el-card>
  </div>
</template>
