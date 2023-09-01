{/* <table className="table table-bordered">
                          <thead>
                            <tr>
                              {sideBarData.map((item) =>
                                item.subModules ? (
                                  <th key={item.id}>{item.moduleName}</th>
                                ) : null
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {sideBarData
                              .map(
                                (maxSubmodules, item) =>
                                  item.subModules &&
                                  item.subModules.length > maxSubmodules
                                    ? item.subModules.length
                                    : maxSubmodules,
                                0
                              )
                              .map((_, index) => (
                                <tr key={index}>
                                  {sideBarData.map((item) => (
                                    <td key={item.id}>
                                      {item.subModules && item.subModules[index]
                                        ? item.subModules[index].moduleName
                                        : ""}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                          </tbody>
                        </table> */}