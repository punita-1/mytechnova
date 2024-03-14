const ProfileEvent = ({ data, index }) => {
    return (
        <>
            <div className="py-2 mb-5">
                <h2 className="mb-2">Event {index+1}</h2>
                <table className='table table-striped table-success col-md-8 offset-md-2 col-12 mx-2 text-break rounded rounded-3'>
                    <tbody className="w-100">
                        <tr className="w-100">
                            <th scope='row' className='text-start w-50'>Event Name</th>
                            <td className='text-start w-50'>{data.eventName}</td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start w-50'>Team Name</th>
                            <td className='text-start w-50'>{data.teamName}</td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start w-50'>Total Members</th>
                            <td className='text-start w-50'>{data.membersCount}</td>
                        </tr>

                    </tbody>
                </table>
                <div className="h3 text-center">Members Details :</div>
                <div className="row justify-content-center">
                    {data.members.map((member) => {
                        return (
                            <div className="bg-success-subtle rounded-2 shadow col-5 mx-auto my-2 h-auto overflow-x-auto py-4">
                                <div className="card-body">
                                    <div className="h4 mb-0">
                                        <i className="bi bi-person-fill"></i> Member Name:
                                    </div>
                                    <div className="p">
                                        - {member.name}
                                    </div>
                                    <div className="h4 mb-0 mt-1">
                                        <i className="bi bi-person-lines-fill"></i> Roll Number:
                                    </div>
                                    <div className="p">
                                        - {member.rollnum}
                                    </div>
                                    {/* <div className="h4 mb-0 mt-1">
                                        <i className="bi bi-journals"></i> Course & Branch:
                                    </div>
                                    <div className="p">
                                        - {member.branch}
                                    </div>
                                    <div className="h4 mb-0 mt-1">
                                        <i className="bi bi-journal"></i> Semester:
                                    </div>
                                    <div className="p">
                                        - {member.sem}
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}
export default ProfileEvent;