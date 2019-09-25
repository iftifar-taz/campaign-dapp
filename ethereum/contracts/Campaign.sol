pragma solidity >=0.5.11 <0.6.0;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint mc) public {
        address newCampaign = address(new Campaign(mc, msg.sender));
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns () public view returns (address[] memory){
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;
    
    constructor(uint mc, address mger) public {
        manager = mger;
        minimumContribution = mc;
    }
    
    modifier isManager() {
        require(msg.sender == manager);
        _;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string memory description, uint value, address payable recipient) public isManager {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint requestIndex) public {
        Request storage storageRequest = requests[requestIndex];
        require(approvers[msg.sender]);
        require(!storageRequest.approvals[msg.sender]);

        storageRequest.approvals[msg.sender] = true;
        storageRequest.approvalCount++;
    }
    
    function finalizeRequest(uint requestIndex) public isManager {
        Request storage storageRequest = requests[requestIndex];
        
        require(storageRequest.approvalCount > (approversCount / 2));
        require(!storageRequest.complete);
        
        storageRequest.recipient.transfer(storageRequest.value);
        storageRequest.complete = true;
    }

    function getSummery() public view returns(
        uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestCount() public view returns(uint) {
        return requests.length;
    }
}
