<template>
  <div class="role-manage full-box">
    <BaseContainer class="role-list" style="width: 30%">
      <span slot="header">角色列表</span>
      <BaseTree :data="data" :props="defaultProps" @node-click="handleNodeClick"></BaseTree>
    </BaseContainer>
    <BaseContainer>
      <span slot="header">菜单列表</span>
    </BaseContainer>
  </div>
</template>

<script>
export default {
  name: "RoleManage",
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                },
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick() {}
  }
};
</script>

<style lang="scss" scoped>
.role-manage {
  display: flex;
  .role-list {
    width: 30%;
    padding-right: $size20;
    margin-right: $size20;
    border-right: 1px solid $systemActiveBackgroundColor;
  }
  .role-info {
    flex: 1;
  }
}
</style>