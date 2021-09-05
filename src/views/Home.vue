<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div ref="trees"></div>

    <el-tree
      ref="trees"
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
      :check-strictly="true"
      @check="select"
      
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
              children:[
                {
                  id:41,
                  label:"二级 4-1",
                  children:[
                    {
                      id:42,
                      label:"二级 4-2",
                    },
                    {
                      id:43,
                      label:"二级 4-2",
                    }
                  ]
                },
                {
                  id:44,
                  label:"二级 3-2",
                  
                }
              ]
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    select(data){ 
      let thisNode = this.$refs.trees.getNode(data.id) // 获取当前节点
      const keys = this.$refs.trees.getCheckedKeys() // 获取已勾选节点的key值
          if (thisNode.checked) { // 当前节点若被选中 父级被选中
            for (let i = thisNode.level; i > 1; i--) { // 判断是否有父级节点
              if (!thisNode.parent.checked) { // 父级节点未被选中，则将父节点替换成当前节点，往上继续查询，并将此节点key存入keys数组
                thisNode = thisNode.parent
                keys.push(thisNode.data.id)
              }
            
            }
            //  this.cloneData(thisNode.childNodes)
              
             
            
          }
          
          this.$refs.trees.setCheckedKeys(keys)
          console.log(this.$refs.trees.getCheckedNodes(),'======')
    },

    // cloneData(val){
    //   let newData = []
    //   for(let key in val){
    //     console.log(val[key]['childNodes'] instanceof Array,"val[key]['childNodes'].length",val[key]['childNodes'].length)
    //     console.log(val[key]['childNodes'])
    //     return false
    //     // if(val[key]['childNodes'].length>0){
    //     //     this.cloneData(val[key]) 
    //     // }else{
    //     //   newData.push(val[key])
    //     // }
    //   }
    //   return newData
    // }
    
  },
};
</script>
