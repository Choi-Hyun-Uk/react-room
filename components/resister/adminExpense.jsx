import React from 'react';
import { AdminExpense, AdminExpenseCheckBox } from './styles';

const AdminExpenseBox = ({ priceCheckedRadio, adminExpense, onChangeAdminExpense, onChangeAdminExpenseCheck }) => {
    return (
        <>
        {
            priceCheckedRadio !== 'SELLING' && (
                <>
                    <AdminExpense>
                        <h2>관리비</h2>
                        <div>
                            <p>관리비용</p>
                            <input type="text" value={adminExpense} onChange={onChangeAdminExpense} />
                        </div>
                    </AdminExpense>
                    <AdminExpenseCheckBox>
                        <h2>관리비 항목(중복 선택)</h2>
                        <div className="checkbox">
                            <div>
                                <input type="checkbox" id="electric" name="admin-expense-check" value="ELECTRIC" onChange={onChangeAdminExpenseCheck} />
                                <label htmlFor="electric">전기</label>
                            </div>
                            <div>
                                <input type="checkbox" id="gas" name="admin-expense-check" value="GAS" onChange={onChangeAdminExpenseCheck} />
                                <label htmlFor="gas">가스</label>
                            </div>
                            <div>
                                <input type="checkbox" id="waterworks" name="admin-expense-check" value="WATERWORKS" onChange={onChangeAdminExpenseCheck} />
                                <label htmlFor="waterworks">수도</label>
                            </div>
                            <div>
                                <input type="checkbox" id="internet" name="admin-expense-check" value="INTERNET" onChange={onChangeAdminExpenseCheck} />
                                <label htmlFor="internet">인터넷</label>
                            </div>
                            <div>
                                <input type="checkbox" id="tv" name="admin-expense-check" value="TV" onChange={onChangeAdminExpenseCheck} />
                                <label htmlFor="tv">TV</label>
                            </div>
                        </div>
                    </AdminExpenseCheckBox>
                </>
            )
        }
        </>
    )
}

export default AdminExpenseBox;