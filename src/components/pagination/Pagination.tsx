import { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Row, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { States } from "../../store";
import { changePage } from "../../store/pagination/pagination.actions";

interface PaginationStore {
  pageList: number[];
  page?: number;
  changePage?: Function;
}

const PaginationComponent: FunctionComponent<PaginationStore> = (
  store: PaginationStore
) => {
  function setActivePage(page: number) {
    if (store.changePage) store.changePage(page);
  }
  function activePage(): number {
    if (!store.page) return -1;
    return store.page;
  }

  function startIndex(): number {
    if (!store.page) return -1;
    if (store.page - 2 < 1) return 0;
    return store.page - 3;
  }

  function lastIndex(): number {
    if (!store.pageList || !store.page) return -1;
    if (store.page + 2 >= store.pageList.length) return store.pageList.length;
    return store.page + 3;
  }

  return (
    <Row className="flex-row justify-content-center">
      <Pagination>
        {store.pageList.slice(startIndex(), lastIndex()).map((t) => (
          <PaginationItem
            active={activePage() - 1 === t}
            onClick={() => setActivePage(t + 1)}
            key={t}
          >
            <PaginationLink>{t + 1}</PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
      {}
    </Row>
  );
};

const mapStateToProps = (state: States) => ({
  page: state.paginationReducer.page,
});

const mapDispatchToProps = {
  changePage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent as FunctionComponent<PaginationStore>);
