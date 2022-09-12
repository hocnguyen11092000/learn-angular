import { Component, OnInit } from '@angular/core';
import {
  NzFormatEmitEvent,
  NzTreeNode,
  NzTreeNodeOptions,
} from 'ng-zorro-antd/tree';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  selectedKey: string = '';
  checkedKeys: Array<string> = [];
  expandKey: string | undefined = '';
  nodes_expand = [
    {
      checked: false,
      title: 'root',
      key: 'root',
      parentCode: null,
      code: 'root',
    },
  ];

  childrenNode = [
    {
      checked: false,
      title: 'User',
      key: 'User',
      parentCode: 'root',
      code: 'User',
    },
    {
      checked: false,
      title: 'Member',
      key: 'Member',
      parentCode: 'User',
      code: 'Member',
    },
    {
      checked: false,
      title: 'Operation',
      key: 'Operation',
      parentCode: 'User',
      code: 'Operation',
    },
    {
      title: 'Get list member data',
      key: 'Get list member data',
      parentCode: 'View member',
      code: 'Get list member data',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Get group member data',
      key: 'Get group member data',
      parentCode: 'View member',
      code: 'Get group member data',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Delete member',
      key: 'Delete member',
      parentCode: 'Member',
      code: 'Delete member',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Create member',
      key: 'Create member',
      parentCode: 'Member',
      code: 'Create member',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      checked: false,
      title: 'View member',
      key: 'View member',
      parentCode: 'Member',
      code: 'View member',
    },
    {
      checked: false,
      title: 'View oparation',
      key: 'View oparation',
      parentCode: 'Operation',
      code: 'View oparation',
    },
    {
      checked: false,
      title: 'Delete oparation',
      key: 'Delete oparation',
      parentCode: 'Operation',
      code: 'Delete oparation',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      checked: false,
      title: 'Create oparation',
      key: 'Create oparation',
      parentCode: 'Operation',
      code: 'Create oparation',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Get list oparation data',
      key: 'Get list oparation data',
      parentCode: 'View oparation',
      code: 'Get list oparation data',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Get group oparation data',
      key: 'Get group oparation data',
      parentCode: 'View oparation',
      code: 'Get group oparation data',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      checked: false,
      title: 'Dashboard',
      key: 'Dashboard',
      parentCode: 'root',
      code: 'Dashboard',
    },
    {
      title: 'Dashboard 001',
      key: 'Dashboard 001',
      parentCode: 'Dashboard',
      code: 'Dashboard 001',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Dashboard 002',
      key: 'Dashboard 002',
      parentCode: 'Dashboard',
      code: 'Dashboard 002',
      isLeaf: true,
      disableCheckbox: true,
    },
    {
      title: 'Dashboard 003',
      key: 'Dashboard 003',
      parentCode: 'Dashboard',
      code: 'Dashboard 003',
      isLeaf: true,
      disableCheckbox: true,
    },
  ];

  //error at children
  checkChild(children: any, node: any) {
    children.forEach((child: any) => {
      child.checked = node.origin.checked;

      if (child.children) {
        this.checkChild(child.children, node);
      }
    });
  }

  log() {
    console.log([...this.childrenNode, ...this.nodes_expand]);
  }

  handleChange(e: any, node: NzTreeNode) {
    this.selectedKey = e;
    node.origin.checked = !node.origin.checked;

    if (node.children.length > 0) {
      const children = [...this.childrenNode, ...this.nodes_expand].filter(
        (item) => item.parentCode === this.selectedKey
      );

      if (children.length > 0) {
        this.checkChild(children, node);
      }
    }

    this.checkParent(node);
  }

  // log(node: NzTreeNode): void {
  //   node.origin.checked = !node.origin.checked;

  //   if (node.children.length > 0) {
  //     console.log(this.selectedKey);

  //     const children = [...this.childrenNode, ...this.nodes_expand].filter(
  //       (item) => item.parentCode === this.selectedKey
  //     );

  //     if (children.length > 0) {
  //       this.checkChild(children, node);
  //     }
  //   }

  //   this.checkParent(node);
  // }

  checkParent(node: NzTreeNode) {
    let checkedAll = node.parentNode?.children
      .filter((item) => !item.isLeaf)
      .every((child) => child.origin.checked) as boolean;
    let parentNode = [...this.childrenNode, ...this.nodes_expand].find(
      (item) => item.key === node?.parentNode?.key
    );

    if (parentNode) {
      parentNode.checked = checkedAll;

      if (node.parentNode) {
        this.checkParent(node.parentNode);
      }
    }
  }

  nzEvent(event: NzFormatEmitEvent): void {
    // load child async
    if (event.eventName === 'expand') {
      const node = event.node;
      this.expandKey = node?.key;

      if (node?.getChildren().length === 0 && node?.isExpanded) {
        this.loadNode().then((data) => {
          node.addChildren(data);
        });
      }
    }
  }

  loadNode(): Promise<NzTreeNodeOptions[]> {
    return new Promise((resolve) => {
      const children = this.childrenNode.filter(
        (x) => x.parentCode === this.expandKey
      );

      setTimeout(() => resolve(children), 500);
    });
  }
}
