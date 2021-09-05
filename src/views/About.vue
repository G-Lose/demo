<template>
  <div class="about">
    <h1>This is an about page</h1>
     <el-tree
          :props="defaultProps"
          :data="treeMenus"
          show-checkbox
          highlight-current
          node-key="id"
          check-strictly
          ref="tree"
          :default-expanded-keys="arrIds"

          @check-change="handleCheckChange"

          @check="handlenode"

        >
    </el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeMenus: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 92,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
                {
                  id: 91,
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级-3-2",
              children: [
                {
                  id: 41,
                  label: "二级 4-1",
                  children: [
                    {
                      id: 42,
                      label: "二级 4-2",
                    },
                    {
                      id: 43,
                      label: "二级 4-2",
                    },
                  ],
                },
                {
                  id: 44,
                  label: "二级 3-2",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      arrIds:[]
    };
  },
  methods: {
    //@check-change
    handleCheckChange(a, b) {
      this.bool = b;
      let res = this.$refs.tree.getCheckedNodes();
      let arr = [];
      res.forEach((item) => {
        arr.push(item.id);
      });
      this.arrIds = arr;
      console.log(this.arrIds,'arrIds')
    },
    // check
    handlenode(one) {
      let node = this.$refs.tree.getNode(one);  //获取节点node数据
      setTimeout(() => {
        this.childNodesChange(node);
      }, 1);
    },

    childNodesChange(node) {
      let len = node.childNodes.length;
      for (let i = 0; i < len; i++) {
        node.childNodes[i].checked = this.bool;
        this.childNodesChange(node.childNodes[i]);
      }

    }, 
  },
};
</script>
<style>

</style>
