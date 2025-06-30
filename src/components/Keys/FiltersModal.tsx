import { XCircle } from "lucide-react";

import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

type FiltersModalProps = {
  isFiltersModal: boolean;
  setIsFiltersModal: React.Dispatch<React.SetStateAction<boolean>>;
  showFiltersModalHandler: () => void;
  brands: string[];
};

const FiltersModal = ({
  isFiltersModal,
  setIsFiltersModal,
  showFiltersModalHandler,
}: FiltersModalProps) => {
  function closeFiltersModalHandler() {
    setIsFiltersModal(false);
  }

  return (
    <Modal>
      {isFiltersModal && <Backdrop onClick={closeFiltersModalHandler} />}

      <XCircle
        onClick={closeFiltersModalHandler}
        className="text-cyan-500 h-8 w-8 self-end hover:bg-cyan-200 hover:rounded-full cursor-pointer"
      />
      <h1 className="font-bold text-2xl pb-4 text-center">Filters</h1>
      <div className="flex flex-row justify-end items-center gap-x-8">
        <button
          type="button"
          className=" mb-2 px-4 py-2 w-full text-white rounded-md bg-cyan-500 hover:bg-cyan-600 cursor-pointer"
          onClick={showFiltersModalHandler}
        >
          Apply
        </button>
        <button
          type="button"
          className=" mb-2 px-4 py-2 w-full border-1 border-cyan-500 text-cyan-600 rounded-md bg-white hover:bg-gray-200 cursor-pointer"
          onClick={showFiltersModalHandler}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default FiltersModal;
