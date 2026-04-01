actor {
  type StudentData = {
    applicationNumber : Text;
    applicantName : Text;
    batchYear : Text;
    result : Bool;
  };

  public query ({ caller }) func lookupByApplicationId(_ : Text) : async StudentData {
    {
      applicationNumber = "20230431";
      applicantName = "ANSH ARYA";
      batchYear = "2026-28";
      result = false;
    };
  };
};
