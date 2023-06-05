"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5655],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3751:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={},i="Cluster",l={unversionedId:"cluster",id:"cluster",title:"Cluster",description:"Before releasing the cluster mode of Kvrocks, we usually used the pre-sharding way to scale out the capacity like sharding with Twemproxy, and used Redis Sentinel to guarantee the availability. Although it works well in most scenes since the capacity of Kvrocks is far larger than Redis, it\u2019s still hard to scale-out in-flight, so we decided to implement the cluster mode to make it easier.",source:"@site/docs/cluster.md",sourceDirName:".",slug:"/cluster",permalink:"/docs/cluster",draft:!1,editUrl:"https://github.com/apache/incubator-kvrocks-website/tree/main/docs/cluster.md",tags:[],version:"current",lastUpdatedBy:"\u7eaa\u534e\u88d5",lastUpdatedAt:1685941489,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Namespace",permalink:"/docs/namespace"},next:{title:"Replication",permalink:"/docs/replication"}},s={},c=[{value:"Architect",id:"architect",level:2},{value:"Topology management",id:"topology-management",level:2},{value:"Node management",id:"node-management",level:2},{value:"Client access",id:"client-access",level:2},{value:"Deploy and operate",id:"deploy-and-operate",level:2},{value:"Cluster command And safety",id:"cluster-command-and-safety",level:2},{value:"Cluster scaling",id:"cluster-scaling",level:2},{value:"Summary",id:"summary",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster"},"Cluster"),(0,a.kt)("p",null,"Before releasing the cluster mode of Kvrocks, we usually used the pre-sharding way to scale out the capacity like sharding with Twemproxy, and used Redis Sentinel to guarantee the availability. Although it works well in most scenes since the capacity of Kvrocks is far larger than Redis, it\u2019s still hard to scale-out in-flight, so we decided to implement the cluster mode to make it easier."),(0,a.kt)("p",null,"There are two main types of Redis cluster solutions in the industry:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redis cluster decentralized solution"),(0,a.kt)("li",{parentName:"ul"},"Codis centralized solution")),(0,a.kt)("p",null,"For Redis cluster solution, the biggest advantage is NOT needing to depend on other components, but the shortcoming is also obvious that it's hard to write the right implementation and not easy to maintain the cluster topology. Another big issue is Gossip protocol would limit the cluster size."),(0,a.kt)("p",null,"For Codis solution, we need to introduce a proxy and centralized storage to keep the metadata, the proxy also added extra network communication cost and delay."),(0,a.kt)("p",null,"In Kvrocks cluster design, we want to integrate advantages of both solutions: that is, you can access Kvrocks without the proxy, and scale-out easily."),(0,a.kt)("h2",{id:"architect"},"Architect"),(0,a.kt)("p",null,"Each Kvrocks node can act as Redis node which can offer the cluster topology directly, and the Redis cluster client can also work on the Kvrocks cluster without any modifications. The topology is managed by the other control panel component which can avoid the complexity of the Gossip protocol(Redis community takes many years to complete the Gossip on cluster solution)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cluster",src:o(1954).Z,width:"519",height:"326"})),(0,a.kt)("h2",{id:"topology-management"},"Topology management"),(0,a.kt)("p",null,"Kvrocks uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/kvrocks/pull/302"},"CLUSTERX SETNODES")," command to set up the cluster topology, be careful that we should apply the entire topology information to all nodes since nodes didn't communicate with each other. The command is like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CLUSTERX SETNODES $ALL_NODES_INFO $VERSION $FORCE\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ALL_NODES_INFO")," is the cluster topology information in format (note that newline is required between different nodes):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$node_id $ip $port $role $master_node_id $slot_range\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$node_id"),": 40 chars string, it represents as the unique id in the cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$ip")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"$port"),": the node IP address and the listening port"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$role"),": node's role, should be one of ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"slave")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$master_node_id"),": set to the master node id when the current node's role is a slave; ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," if it's master"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$slot_range"),": slots are served by current node, the format can be the range or single value, like ",(0,a.kt)("inlineCode",{parentName:"li"},"0-100 200 205"),", which means slots 0 to 100, 200 and 205 are served by this node")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$VERSION")," is the topology information version used to control update the order. The topology information can be updated if the version is newer than the current version."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$FORCE")," (0 or 1) indicates force update the topology information without verifying the version, you can use this flag when the topology information is totally broken. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'CLUSTERX SETNODES "kvrockskvrockskvrockskvrockskvrocksnode1 10.32.68.251 6666 master - 0-5460 \\n kvrockskvrockskvrockskvrockskvrocksnode2 10.32.68.250 6667 master - 5461-10992 \\n kvrockskvrockskvrockskvrockskvrocksnode3 10.32.68.249 6666 master - 10993-16383" 1\n')),(0,a.kt)("p",null,"Although Kvrocks can recognize the node id by comparing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip:port")," pair then finding out the serving slots, but users may set the IP address to ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," so that we can't match the right topology information. Thus, Kvrocks gives the extra command ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/kvrocks/pull/302"},"CLUSTERX SETNODEID")," to set the id. The format is like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CLUSTERX SETNODEID $NODE_ID\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$NODE_ID")," should be 40 chars unique id in cluster."),(0,a.kt)("h2",{id:"node-management"},"Node management"),(0,a.kt)("p",null,"Kvrocks cluster can be set up as simple as using those cluster commands, we even can write a script to watch and apply cluster changes. Those commands can be integrated into those companies which have their own cluster solution. Kvrocks also offers the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTERX VERSION")," command to inspect current cluster topology information, the controller can force to update topology information when the version is out of date or wrong."),(0,a.kt)("p",null,"For a complete cluster solution, we need to depend on another controller to manage the topology information, failure detection, and failover. Kvrocks team is also developing the official controller to make the cluster manage and operate easier. But the manual resource is the bottleneck, welcome anyone who is interested in this project to build together."),(0,a.kt)("h2",{id:"client-access"},"Client access"),(0,a.kt)("p",null,"Users can use Redis Cluster SDK to access the Kvrocks cluster since it's compatible with the Redis cluster solution(Kvrocks supported ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTER NODES")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTER SLOTS")," commands to respond to the cluster topology).  Kvrocks also responds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"MOVED $slot_id $ip:$port")," to redirect the target node when the slot is NOT served by the current node. You can also use the Redis Cluster Proxy like ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cluster-proxy")," to hide the cluster topology."),(0,a.kt)("h2",{id:"deploy-and-operate"},"Deploy and operate"),(0,a.kt)("p",null,"Users need to self-manage the cluster topology information since the Kvrocks controller is still under development. The deployment steps are below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deploy Kvrocks nodes"),(0,a.kt)("li",{parentName:"ol"},"Design the kvrocks topology which is mentioned at ",(0,a.kt)("a",{parentName:"li",href:"#topology-management"},"topology management")),(0,a.kt)("li",{parentName:"ol"},"Set node unique id for each node by using ",(0,a.kt)("inlineCode",{parentName:"li"},"CLUSTERX SETNODEID")," command"),(0,a.kt)("li",{parentName:"ol"},"Apply the topology information to all nodes by using ",(0,a.kt)("inlineCode",{parentName:"li"},"CLUSTER NODES")," command")),(0,a.kt)("p",null,"Kvrocks would auto-setup the master-slave replication after receiving the setup topology command, and repeats steps 2-4 when we want to switch the node role or number."),(0,a.kt)("p",null,"Currently, Kvrocks topology modification is based on full state, that's we need to sync the full topology information to each node, which may cause high network and cpu cost, but it can guarantee the correctness of the cluster. Also, the version-based modification can help us to achieve the increment modification if we want to do that, we would offer a way to add, update and delete nodes to make operation easier."),(0,a.kt)("h2",{id:"cluster-command-and-safety"},"Cluster command And safety"),(0,a.kt)("p",null,"To guarantee the correctness of client SDK, we rename the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTER")," command to ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTERX")," to prevent the topology can being modified casually, but we can still use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTER")," command to fetch the cluster topology information."),(0,a.kt)("h2",{id:"cluster-scaling"},"Cluster scaling"),(0,a.kt)("p",null,"Kvrocks data migration is based on the slot instead of on key like Redis, we can migrate one slot to another node at once."),(0,a.kt)("p",null,"Kvrocks storage is based on disk instead of memory, so the key migration may be time cost. Now, the controller/DBA can use ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTERX MIGRATE")," command to migrate slots."),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTERX MIGRATE")," command to migrate the slot, you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTERX SETSLOT")," to modify the topology information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CLUSTERX SETSLOT $slot NODE $node_id $new_version\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$slot"),": assign which slot to be migrated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NODE"),": same as the Redis cluster setslot"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$dest_nodeid"),": which node of the slot is to be migrated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$new_version"),": the version of the topology information, noted that the version MUST be newer than the old version, or the node would refuse to apply the modification.")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/kvrocks/pull/430"},"PR-430"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Kvrocks cluster implementation is compatible with the Redis cluster, in which users can use the Redis cluster client to access the Kvrocks cluster, also didn't have the extra proxy latency like the Codis solution."),(0,a.kt)("p",null,"By the way, Kvrocks cluster topology management and scaling have finished from 2.0.6. We will continue improving the visibility, operation, and cluster management, to make the cluster better and easier."),(0,a.kt)("p",null,"For the Kvrocks controller, the community is building the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KvrocksLabs/kvrocks_controller"},"controller")," to make the cluster management easier. Welcome anyone who is interested."))}u.isMDXComponent=!0},1954:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cluster-3bf45cdcb0c197a26753abd6d6975353.png"}}]);