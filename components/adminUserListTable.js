import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import {
  Typography,
  TextField,
  Modal,
  Button,
  MenuItem,
  Divider,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Label from "./Label";
import { visuallyHidden } from "@mui/utils";
import { toast } from "react-toastify";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { Link } from "@mui/material";
import MenuPopover from "./MenuPopover";
import { CgMoreVertical } from "react-icons/cg";
import { TrashIcon } from "@heroicons/react/24/outline";
import DeleteUserModal from "./DeleteUserModal.jsx";
import UserDetailsModal from "./UserDetailsModal";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "firstName",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "email",
  },
  {
    id: "IdImg",
    numeric: false,
    disablePadding: false,
    label: "ID Image",
  },
  {
    id: "isVerified",
    numeric: false,
    disablePadding: false,
    label: "isVerified",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align={"left"} padding={"normal"} sortDirection={order}>
          <TableSortLabel>
            <></>
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};
EnhancedTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default function EnhancedTable({ rows }) {
  const [userList, setUserList] = useState(
    rows.map((x) => ({ ...x, loading: false }))
  );
  const [order, setOrder] = React.useState("asc");
  const [open, setOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [orderBy, setOrderBy] = React.useState("firstName");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleDeleteModal = (user) => {
    setCurrentUser(user);
    setOpen(true);
  };
  const removeUserFromList = (id) => {
    setUserList((x) => x.filter((x) => x._id !== id));
  };
  const handleDetailsModal = (user) => {
    setCurrentUser(user);
    setDetailsOpen(true);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const updateAmount = (id, amount) => {
    setUserList((x) =>
      x.map((x) => {
        return {
          ...x,
          accountBalance:
            x._id === id
              ? Number(x.accountBalance) + Number(amount)
              : x.accountBalance,
        };
      })
    );
  };
  const handleVerify = (id) => {
    setUserList((x) =>
      x.map((x) => {
        return {
          ...x,
          loading: x._id === id,
        };
      })
    );
    axios
      .get(`/api/user/verify/${id}`)
      .then((res) => {
        setUserList((x) =>
          x.map((x) => {
            return {
              ...x,
              loading: false,
              isVerified: x._id === id ? !x.isVerified : x.isVerified,
            };
          })
        );
        toast.success(res.data.message);
      })
      .catch((err) => {
        setUserList((x) =>
          x.map((x) => {
            return {
              ...x,
              loading: false,
            };
          })
        );
        // console.log(err.response?.data.message);

        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
      });
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <DeleteUserModal
        open={open}
        setOpen={setOpen}
        user={currentUser}
        removeUser={removeUserFromList}
      />
      <UserDetailsModal
        open={detailsOpen}
        setOpen={setDetailsOpen}
        user={currentUser}
      />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(userList, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover tabIndex={-1} key={row._id}>
                    <TableCell align="left">
                      {row._id.toUpperCase().slice(0, 6) + "..."}
                    </TableCell>
                    <TableCell align="left">{row.firstName}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">
                      {row.IdImg ? (
                        <Link href={row.IdImg}>Click here</Link>
                      ) : (
                        <p>no id image yet</p>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <Label
                        variant={"ghost"}
                        color={!row.isVerified ? "warning" : "success"}
                      >
                        {!row.isVerified ? "not Verified" : "Verified"}
                      </Label>
                    </TableCell>
                    <TableCell align="left">
                      <MoreMenuButton
                        user={row}
                        handleVerify={handleVerify}
                        handleModal={() => handleDeleteModal(row)}
                        handleDetails={() => handleDetailsModal(row)}
                        updateBalance={updateAmount}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

AddBonus.propTypes = {
  user: PropTypes.object.isRequired,
};
function AddBonus({ user }) {
  const { _id } = user;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    setLoading(true);
    axios
      .put(`/api/user/${_id}/bonus`, { bonus: value })
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        // console.log(err.response?.data.message);
        setLoading(false);
        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Bonus
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={4} variant="subtitle2">
            Note: This is for only active Users
          </Typography>
          <TextField onChange={handleChange} value={value} type={"number"} />
          <LoadingButton
            onClick={handleAdd}
            loading={loading}
            variant="contained"
          >
            <span>Add Bonus </span>
          </LoadingButton>
        </Box>
      </Modal>
    </div>
  );
}
function AddBalance({ user, updateBalance }) {
  const { _id } = user;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    if (!isNaN(value) && value + user.accountBalance > 0) {
      setLoading(true);
      axios
        .put(`/api/user/${_id}/balance`, { balance: value })
        .then((res) => {
          updateBalance(_id, value);
          setLoading(false);
          setValue("");
          setOpen(false);
          toast.success(res.data.message);
        })
        .catch((err) => {
          // console.log(err.response?.data.message);
          setLoading(false);
          if (err.response) {
            toast.error(err.response.data.message);
          } else {
            toast.error(err.message);
          }
        });
    } else {
      toast.warning("number invalid or deduction is more than balance.");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Balance
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={4} variant="subtitle2">
            Note: This is for only active Users
          </Typography>
          <TextField onChange={handleChange} value={value} type={"number"} />
          <LoadingButton
            onClick={handleAdd}
            loading={loading}
            variant="outlined"
          >
            <span>Add To Balance </span>
          </LoadingButton>
        </Box>
      </Modal>
    </div>
  );
}

function MoreMenuButton({
  user,
  handleVerify,
  handleModal,
  handleDetails,
  updateBalance,
}) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <CgMoreVertical width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <MenuItem sx={{ color: "primary.main" }} onClick={handleDetails}>
          View Details
        </MenuItem>
        <MenuItem>
          {!user.isVerified ? (
            <LoadingButton
              variant="contained"
              loading={user.loading}
              onClick={() => handleVerify(user._id)}
            >
              <span> Verify Now </span>
            </LoadingButton>
          ) : (
            <AddBonus user={user} />
          )}
        </MenuItem>
        <MenuItem>
          {user.isVerified && (
            <AddBalance user={user} updateBalance={updateBalance} />
          )}
        </MenuItem>
        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem sx={{ color: "error.main" }} onClick={handleModal}>
          <TrashIcon className=" mr-2 w-[20px] h-[20px]" />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
