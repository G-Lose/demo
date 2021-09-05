<template>
  <div>
    <el-tree
      ref="trees"
      node-key="id"
      :data="data"
      show-checkbox
      :check-strictly="true"
      lazy
      :props="defaultPropsCopy"
      highlight-current
      :expand-on-click-node="false"
      :default-checked-keys="checkedKeys"
      @check="checkTree"
    >
    </el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: "1",
          parentI: 0,
          disabled: false,
          fondsName: "饮料北京",
          fondsCode: "ylbj",
          fondsClass: null,
          authTypeDesc: null,
          settingDesc: "未设置",
          children: [
            {
              id: "12",
              parentI: 0,
              disabled: false,
              fondsName: "饮料北京",
              fondsCode: "ylbj",
              fondsClass: null,
              authTypeDesc: null,
              settingDesc: "未设置",
              children: [
                {
                  id: "13",
                  parentI: 0,
                  disabled: false,
                  fondsName: "饮料北京",
                  fondsCode: "ylbj",
                  fondsClass: null,
                  authTypeDesc: null,
                  settingDesc: "未设置",
                  children: [],
                },
              ],
            },
            {
              id: "14",
              parentI: 0,
              disabled: false,
              fondsName: "饮料北京",
              fondsCode: "ylbj",
              fondsClass: null,
              authTypeDesc: null,
              settingDesc: "未设置",
              children: [
                {
                  id: "15",
                  parentI: 0,
                  disabled: false,
                  fondsName: "饮料北京",
                  fondsCode: "ylbj",
                  fondsClass: null,
                  authTypeDesc: null,
                  settingDesc: "未设置",
                  children: [],
                },
                {
                  id: "16",
                  parentI: 0,
                  disabled: false,
                  fondsName: "饮料北京",
                  fondsCode: "ylbj",
                  fondsClass: null,
                  authTypeDesc: null,
                  settingDesc: "未设置",
                  children: [
                    {
                      id: "17",
                      parentI: 0,
                      disabled: false,
                      fondsName: "饮料北京",
                      fondsCode: "ylbj",
                      fondsClass: null,
                      authTypeDesc: null,
                      settingDesc: "未设置",
                      children: [],
                    },
                    {
                      id: "18",
                      parentI: 0,
                      disabled: false,
                      fondsName: "饮料北京",
                      fondsCode: "ylbj",
                      fondsClass: null,
                      authTypeDesc: null,
                      settingDesc: "未设置",
                      children: [],
                    },
                    {
                      id: "19",
                      parentI: 0,
                      disabled: false,
                      fondsName: "饮料北京",
                      fondsCode: "ylbj",
                      fondsClass: null,
                      authTypeDesc: null,
                      settingDesc: "未设置",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "2",
          parentI: 0,
          disabled: false,
          fondsName: "饮料北京",
          fondsCode: "ylbj",
          fondsClass: null,
          authTypeDesc: null,
          settingDesc: "未设置",
          children: [
            {
              id: "212",
              parentI: 0,
              disabled: false,
              fondsName: "饮料北京",
              fondsCode: "ylbj",
              fondsClass: null,
              authTypeDesc: null,
              settingDesc: "未设置",
              children: [
                {
                  id: "213",
                  parentI: 0,
                  disabled: false,
                  fondsName: "饮料北京",
                  fondsCode: "ylbj",
                  fondsClass: null,
                  authTypeDesc: null,
                  settingDesc: "未设置",
                  children: [],
                },
              ],
            },
            {
              id: "214",
              parentI: 0,
              disabled: false,
              fondsName: "饮料北京",
              fondsCode: "ylbj",
              fondsClass: null,
              authTypeDesc: null,
              settingDesc: "未设置",
              children: [
                {
                  id: "215",
                  parentI: 0,
                  disabled: false,
                  fondsName: "饮料北京",
                  fondsCode: "ylbj",
                  fondsClass: null,
                  authTypeDesc: null,
                  settingDesc: "未设置",
                  children: [],
                },
                {
                  id: "216",
                  parentI: 0,
                  disabled: false,
                  fondsName: "饮料北京",
                  fondsCode: "ylbj",
                  fondsClass: null,
                  authTypeDesc: null,
                  settingDesc: "未设置",
                  children: [
                    {
                      id: "217",
                      parentI: 0,
                      disabled: false,
                      fondsName: "饮料北京",
                      fondsCode: "ylbj",
                      fondsClass: null,
                      authTypeDesc: null,
                      settingDesc: "未设置",
                      children: [],
                    },
                    {
                      id: "218",
                      parentI: 0,
                      disabled: false,
                      fondsName: "饮料北京",
                      fondsCode: "ylbj",
                      fondsClass: null,
                      authTypeDesc: null,
                      settingDesc: "未设置",
                      children: [],
                    },
                    {
                      id: "219",
                      parentI: 0,
                      disabled: false,
                      fondsName: "饮料北京",
                      fondsCode: "ylbj",
                      fondsClass: null,
                      authTypeDesc: null,
                      settingDesc: "未设置",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      defaultPropsCopy: {
        children: "children",
        label: "fondsName",
      },
      checkedKeys: [],
      deleteKey: [],
    };
  },
  methods: {
    initFun() {
      Array.prototype.indexOf = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == val) return i;
        }
        return -1;
      };

      Array.prototype.remove = function (val) {
        var index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
    },
    //
    checkTree(data) {
      let thisNode = this.$refs.trees.getNode(data.id); // 获取当前节点
      const keys =
        this.$refs.trees.getCheckedKeys() === undefined
          ? []
          : this.$refs.trees.getCheckedKeys(); // 获取已勾选节点的key值
      // let obj = {};
      if (thisNode.checked) {
        // 当前节点若被选中
        let checkedNode = thisNode;
        // 子集选中父级被选中
        for (let i = checkedNode.level; i > 1; i--) {
          // 判断是否有父级节点
          if (!checkedNode.parent.checked) {
            // 父级节点未被选中，则将父节点替换成当前节点，往上继续查询，并将此节点key存入keys数组
            checkedNode = checkedNode.parent;
            keys.push(checkedNode.data.id);
          }
        }
        // 父级被选中 子集也会被选中
        this.checkCurrentNodes(thisNode, keys);
        // console.log(thisNode.data)
        // obj = {
        //   relationId: this.relationId,
        //   relationClass: this.relationClass,
        //   fondsInfo: {
        //     deleteIds: [thisNode.data.id],
        //     fondsClass: thisNode.data.fondsClass,
        //     fondsCode: thisNode.data.fondsCode,
        //     fondsId: thisNode.data.id,
        //     isCheck: true,
        //   },
        //   baseCondition: this.baseCondition ? "self" : "",
        // };
      } else {
        // 查找id有就不添加,没有就删除

        this.deleteKey.push(thisNode.data.id);
        this.cancleCurrentNodes(thisNode, keys);
        // 选中-不选中
        this.cancleParentCurrentNodes(thisNode, keys);

        // obj = {
        //   relationId: this.relationId,
        //   relationClass: this.relationClass,
        //   fondsInfo: {
        //     deleteIds: this.deleteKey,
        //     fondsClass: thisNode.data.fondsClass,
        //     fondsCode: thisNode.data.fondsCode,
        //     fondsId: thisNode.data.id,
        //     isCheck: false,
        //   },
        //   baseCondition: this.baseCondition ? "self" : "",
        // };
      }
      this.$refs.trees.setCheckedKeys(keys); // 将所有keys数组的节点全选中

      // let array = this.$refs.trees.getCheckedNodes()
      // let params = array.map(item=>({fondsCode:item.fondsCode,fondsId:item.id}))

      this.saveLoading = true;
      // saveFondsTree(obj).then((res) => {
      //     this.saveLoading = false;
      //     this.$notify({
      //       title: "成功",
      //       message: res.data.info,
      //       type: "success",
      //       duration: 2000,
      //     });
      //     this.deleteKey = [];
      //   })
      //   .catch(() => {
      //     this.saveLoading = false;
      //   });
    },
    //
    cancleParentCurrentNodes(node, keys) {
      let currentNode = node;
      for (let i = currentNode.level; i > 0; i--) {
        // 判断是否有父级节点
        if (currentNode.parent.checked) {
          // 父级节点未被选中，则将父节点替换成当前节点，往上继续查询，并将此节点key存入keys数组
          //找到当前父节点下面所有同级姊妹节点信息查看是否选中如果都没有选中那么把父节点信息从keysremove掉
          let len = currentNode.parent.childNodes.length;
          let isCheckedNode = false;
          for (let i = 0; i < len; i++) {
            if (currentNode.parent.childNodes[i].checked) {
              isCheckedNode = true;
              break;
            }
          }

          if (!isCheckedNode) {
            currentNode.parent.checked = false;
            // 查找id有就不添加,没有就删除
            this.deleteKey.push(currentNode.parent.data.id);

            keys.remove(currentNode.parent.data.id);
          }
          currentNode = currentNode.parent;
        }
      }
    },
    cancleCurrentNodes(node, keys) {
      let len = node.childNodes.length;
      for (let i = 0; i < len; i++) {
        keys.remove(node.childNodes[i].data.id);
        this.cancleCurrentNodes(node.childNodes[i], keys);
      }
    },
    checkCurrentNodes(node, keys) {
      let len = node.childNodes.length;
      for (let i = 0; i < len; i++) {
        keys.push(node.childNodes[i].data.id);
        this.checkCurrentNodes(node.childNodes[i], keys);
      }
    },
  },
  created() {
    this.initFun();
  },
};
</script>