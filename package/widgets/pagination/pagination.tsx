import { type PropType, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { DoubleLeftOutlined, DoubleRightOutlined, EllipsisOutlined, Icon, LeftOutlined, RightOutlined } from "../icon";
import { PaginationEmits, PaginationProps } from "./types";

const emits: PaginationEmits = {
  change: (type, value) => ["page", "size"].includes(type) && typeof value === "number",
};

export const Pagination = withInstall(
  defineComponent({
    emits: { ...emits },
    name: "l-pagination",
    props: {
      options: {
        default: (): PaginationProps["options"] => [10, 20, 50, 100],
        type: Array as PropType<PaginationProps["options"]>,
      },
      page: {
        default: (): PaginationProps["page"] => 1,
        type: Number as PropType<PaginationProps["page"]>,
      },
      showJumper: {
        default: (): PaginationProps["showJumper"] => false,
        type: Boolean as PropType<PaginationProps["showJumper"]>,
      },
      showPicker: {
        default: (): PaginationProps["showPicker"] => false,
        type: Boolean as PropType<PaginationProps["showPicker"]>,
      },
      size: {
        default: (): PaginationProps["size"] => 10,
        type: Number as PropType<PaginationProps["size"]>,
      },
      total: {
        default: (): PaginationProps["total"] => 0,
        type: Number as PropType<PaginationProps["total"]>,
      },
    },
    setup(props) {
      return () => (
        <div class={["l-pagination", {}]}>
          <ul class="l-pagination-pager">
            <li class="l-pagination-pager_number">
              <Icon content={LeftOutlined} />
            </li>
            <li class="l-pagination-pager_number ">1</li>
            <li class="l-pagination-jump-prev">
              <span class="l-pagination-item-link ellipsis">
                <Icon content={EllipsisOutlined} />
              </span>
              <span class="l-pagination-item-link action">
                <Icon content={DoubleLeftOutlined} />
              </span>
            </li>
            <li class="l-pagination-pager_number">7</li>
            <li class="l-pagination-pager_number">8</li>
            <li class="l-pagination-pager_number current">9</li>
            <li class="l-pagination-pager_number">10</li>
            <li class="l-pagination-pager_number">11</li>
            <li class="l-pagination-jump-next">
              <span class="l-pagination-item-link ellipsis">
                <Icon content={EllipsisOutlined} />
              </span>
              <span class="l-pagination-item-link action">
                <Icon content={DoubleRightOutlined} />
              </span>
            </li>
            <li class="l-pagination-pager_number">50</li>
            <li class="l-pagination-pager_number">
              <Icon content={RightOutlined} />
            </li>
          </ul>
        </div>
      );
    },
  })
);
