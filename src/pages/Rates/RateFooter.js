import React from "react";
import classes from "./RateFooter.module.css";
import { useState, useEffect } from "react";

const RateFooter = ({
  goToNextPage,
  goToPreviousPage,
  TotalPages,
  currentPage,
}) => {
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(true);

  useEffect(() => {
    if (currentPage < TotalPages) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  }, [TotalPages, currentPage]);

  useEffect(() => {
    if (currentPage === 1) {
      setShowPrev(false);
    } else {
      setShowPrev(true);
    }
  }, [TotalPages, currentPage]);

  return (
    <tfoot className={classes.container}>
      <tr>
        {!showPrev && <td className={classes.text}>&nbsp;</td>}
        {showPrev && (
          <td onClick={goToPreviousPage} className={classes.text}>
            Previous
          </td>
        )}
        <td colspan="6" className={classes.text}>
          {currentPage} 0f {TotalPages}
        </td>
        {showNext && (
          <td onClick={goToNextPage} className={classes.text1}>
            Next
          </td>
        )}
        {!showNext && <td className={classes.width7}>&nbsp;</td>}
      </tr>
    </tfoot>
  );
};

export default RateFooter;
